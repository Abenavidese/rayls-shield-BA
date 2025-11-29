import { ethers } from "ethers";

export interface PaymentData {
  secret: string;
  nullifier: string;
  amount: string;
  recipient: string;  // NEW: Locks funds to this specific address
  timestamp: number;
  chainId: number;
}

/**
 * Encode payment data into a URL-safe token
 */
export function encodePaymentLink(data: PaymentData): string {
  // Convert to JSON
  const json = JSON.stringify(data);

  // Convert to base64 (URL-safe)
  const base64 = Buffer.from(json).toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  return base64;
}

/**
 * Decode payment data from URL token
 */
export function decodePaymentLink(token: string): PaymentData | null {
  try {
    // Restore base64 padding
    let base64 = token.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) {
      base64 += "=";
    }

    // Decode from base64
    const json = Buffer.from(base64, "base64").toString("utf-8");

    // Parse JSON
    const data = JSON.parse(json) as PaymentData;

    // Validate structure
    if (!data.secret || !data.nullifier || !data.amount || !data.recipient) {
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error decoding payment link:", error);
    return null;
  }
}

/**
 * Generate full payment URL
 */
export function generatePaymentURL(data: PaymentData, baseUrl?: string): string {
  const token = encodePaymentLink(data);
  const base = baseUrl || (typeof window !== "undefined" ? window.location.origin : "");
  return `${base}/claim/${token}`;
}

/**
 * Shorten payment URL for display
 */
export function shortenURL(url: string, maxLength: number = 40): string {
  if (url.length <= maxLength) return url;
  const start = url.substring(0, maxLength / 2);
  const end = url.substring(url.length - maxLength / 2);
  return `${start}...${end}`;
}

/**
 * Copy to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.select();
      const result = document.execCommand("copy");
      document.body.removeChild(textArea);
      return result;
    }
  } catch (error) {
    console.error("Copy to clipboard failed:", error);
    return false;
  }
}

/**
 * Share via Web Share API (if available)
 */
export async function sharePaymentLink(url: string, amount: string): Promise<boolean> {
  try {
    if (navigator.share) {
      await navigator.share({
        title: "RaylsShield Payment",
        text: `You received ${amount} USDgas! Click to claim:`,
        url: url,
      });
      return true;
    }
    return false;
  } catch (error) {
    console.error("Share failed:", error);
    return false;
  }
}
