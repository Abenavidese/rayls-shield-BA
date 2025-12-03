#!/bin/bash

# Script para compilar circuitos y copiarlos al frontend
# Uso: ./setup-circuits.sh

set -e  # Exit on error

echo "🔧 RaylsShield - Circuit Setup"
echo "=============================="
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Paso 1: Compilar circuitos en backend
echo -e "${BLUE}Paso 1: Compilando circuitos ZK...${NC}"
cd backend

# Verificar si existe el directorio ptau
if [ ! -d "ptau" ]; then
    echo -e "${YELLOW}⚠️  Creando directorio ptau...${NC}"
    mkdir -p ptau
fi

# Verificar si existe el archivo powers of tau
if [ ! -f "ptau/powersOfTau28_hez_final_14.ptau" ]; then
    echo -e "${YELLOW}⚠️  Descargando Powers of Tau (esto puede tardar unos minutos)...${NC}"
    curl -o ptau/powersOfTau28_hez_final_14.ptau \
        https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_14.ptau
    echo -e "${GREEN}✅ Powers of Tau descargado${NC}"
fi

# Compilar circuitos
echo ""
echo -e "${BLUE}Compilando circuitos con Circom...${NC}"
npm run circom

echo -e "${GREEN}✅ Circuitos compilados${NC}"
echo ""

# Paso 2: Copiar archivos al frontend
echo -e "${BLUE}Paso 2: Copiando archivos al frontend...${NC}"
cd ../frontend/rayls-shield-landing-page

# Crear directorio public/circuits si no existe
mkdir -p public/circuits

# Copiar archivos
echo "  Copiando privacy.wasm..."
cp ../../backend/circuits/privacy.wasm public/circuits/

echo "  Copiando privacy.zkey..."
cp ../../backend/circuits/privacy.zkey public/circuits/

echo "  Copiando verification_key.json..."
cp ../../backend/circuits/verification_key.json public/circuits/

echo -e "${GREEN}✅ Archivos copiados${NC}"
echo ""

# Verificar archivos
echo -e "${BLUE}Archivos en public/circuits/:${NC}"
ls -lh public/circuits/

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Setup completado exitosamente!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Próximos pasos:"
echo "  1. Desplegar contratos: cd backend && npx hardhat run scripts/deploy-pool.js --network raylsDevnet"
echo "  2. Actualizar direcciones en: frontend/rayls-shield-landing-page/lib/contracts/addresses.ts"
echo "  3. Iniciar frontend: cd frontend/rayls-shield-landing-page && npm run dev"
echo ""
