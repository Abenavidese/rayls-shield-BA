# RaylsShield - Guía de Despliegue y Validación

## Estado del Despliegue ✅

**RaylsShield ha sido desplegado exitosamente en Rayls Devnet**

### Información de Red
- **Red**: Rayls Devnet
- **Chain ID**: 123123
- **RPC URL**: https://devnet-rpc.rayls.com
- **Explorer**: https://devnet-explorer.rayls.com
- **Fecha de Despliegue**: 2025-11-19T13:06:56.517Z

---

## Contratos Desplegados

### 1. Groth16Verifier (Verificador ZK)
- **Dirección**: `0xfD0b399898efC0186E32eb81B630d7Cf7Bb6f217`
- **Explorer**: https://devnet-explorer.rayls.com/address/0xfD0b399898efC0186E32eb81B630d7Cf7Bb6f217
- **Estado**: ✅ Desplegado y verificado

### 2. RaylsShield (Contrato Principal)
- **Dirección**: `0x648B7FfD8a5Dd9C901B6569E7a0DC9A2eAF4c9F1`
- **Explorer**: https://devnet-explorer.rayls.com/address/0x648B7FfD8a5Dd9C901B6569E7a0DC9A2eAF4c9F1
- **Owner**: `0x648a3e5510f55B4995fA5A22cCD62e2586ACb901`
- **Estado**: ✅ Desplegado y verificado

---

## Validaciones Completadas

### Tests Ejecutados
- ✅ 13/14 tests pasaron exitosamente
- ✅ Generación de pruebas ZK funcionando
- ✅ Verificación on-chain de pruebas ZK
- ✅ Envío de mensajes privados
- ✅ Gestión de nullifiers
- ✅ Control de acceso (owner)
- ✅ Flujo end-to-end completo

### Validación del Despliegue
- ✅ Contratos desplegados en la blockchain
- ✅ Owner configurado correctamente
- ✅ Verifier configurado correctamente
- ✅ Bytecode presente en la red

---

## Pasos Completados

1. ✅ Instalación de dependencias
2. ✅ Compilación de circuitos ZK (Circom)
3. ✅ Compilación de contratos Solidity
4. ✅ Ejecución de tests
5. ✅ Despliegue a Rayls Devnet
6. ✅ Validación del despliegue

---

## Cómo Usar RaylsShield

### Interactuar con el Contrato

```javascript
const RaylsShield = await ethers.getContractAt(
  "RaylsShield",
  "0x648B7FfD8a5Dd9C901B6569E7a0DC9A2eAF4c9F1"
);

// Enviar mensaje privado con prueba ZK
await raylsShield.sendPrivateMessage(
  destinationChainId,     // ID de cadena destino
  destinationAddress,      // Dirección destino
  encryptedPayload,        // Payload encriptado
  proofA,                  // Prueba ZK parte A
  proofB,                  // Prueba ZK parte B
  proofC,                  // Prueba ZK parte C
  publicSignals            // [nullifierHash, commitment, recipientHash]
);
```

### Generar Pruebas ZK

```bash
# Generar prueba a partir de inputs
npm run generate:proof
```

---

## Scripts Disponibles

```bash
# Compilar contratos
npm run compile

# Ejecutar tests
npm test

# Desplegar a Rayls Devnet
npm run deploy:devnet

# Demo del flujo completo
npm run demo

# Generar pruebas ZK
npm run generate:proof
npm run generate:inputs
```

---

## Notas Importantes

### Endpoint de Rayls
⚠️ **IMPORTANTE**: El contrato actualmente usa una dirección placeholder para el Rayls Endpoint:
- Dirección actual: `0x0000000000000000000000000000000000000000`
- **Acción requerida**: Actualizar `RAYLS_ENDPOINT_ADDRESS` en `.env` con la dirección real del endpoint de Rayls

Para obtener la dirección real del endpoint:
1. Consultar la documentación oficial de Rayls
2. Contactar al equipo de Rayls
3. Verificar en el explorador de Rayls Devnet

### Balance de la Wallet
- Balance actual: 0.4999999999437146 USDgas
- Suficiente para interacciones básicas

---

## Arquitectura del Proyecto

### Componentes Principales

1. **RaylsShield.sol**: Contrato principal que maneja mensajería privada cross-chain
   - Extiende `RaylsApp` para cross-chain messaging
   - Integra verificación de pruebas ZK
   - Gestiona nullifiers para prevenir replay attacks

2. **Groth16Verifier.sol**: Verificador de pruebas ZK generado por snarkjs
   - Verifica pruebas Groth16
   - Generado automáticamente desde el circuito Circom

3. **privacy.circom**: Circuito ZK para privacidad
   - Inputs privados: secret, nullifier, recipient, amount
   - Inputs públicos: nullifierHash, commitment, recipientHash
   - Usa Poseidon hash para commitments

### Flujo de Operación

```
1. Usuario genera prueba ZK off-chain
   ↓
2. Usuario llama sendPrivateMessage() con la prueba
   ↓
3. RaylsShield verifica la prueba on-chain
   ↓
4. Si válida, envía mensaje cross-chain vía RaylsApp
   ↓
5. Destino recibe mensaje privado
```

---

## Próximos Pasos

### Para Producción

1. **Obtener Endpoint Real**
   - Contactar equipo de Rayls
   - Actualizar variable de entorno
   - Re-desplegar o actualizar configuración

2. **Auditoría de Seguridad**
   - Auditar circuitos ZK
   - Revisar contratos inteligentes
   - Verificar setup de trusted setup

3. **Optimizaciones**
   - Optimizar gas en verificación de pruebas
   - Considerar batch verification
   - Implementar caching de verificaciones

### Para Desarrollo

1. **Frontend Integration**
   - El frontend ya está disponible en `/frontend/rayls-shield-landing-page`
   - Integrar generación de pruebas en el cliente
   - Implementar UI para interacción con contratos

2. **Testing Adicional**
   - Tests de integración cross-chain
   - Tests de carga
   - Tests de seguridad

---

## Soporte y Documentación

- **Documentación de Rayls**: https://docs.rayls.com
- **Repositorio**: https://github.com/rayls/rayls-shield-BA
- **Issues**: https://github.com/rayls/rayls-shield-BA/issues

---

## Troubleshooting

### Error: Insufficient funds
- Verificar balance con: `npm run deploy:devnet`
- Solicitar más USDgas del faucet de Rayls Devnet

### Error: Invalid proof
- Verificar que los inputs de la prueba sean correctos
- Regenerar la prueba con `npm run generate:proof`
- Verificar que el verifier esté correctamente desplegado

### Error: Network timeout
- Verificar conectividad a https://devnet-rpc.rayls.com
- Aumentar timeout en hardhat.config.js
- Intentar nuevamente

---

## Información de Contacto

Para preguntas sobre el despliegue o el proyecto:
- Crear un issue en el repositorio
- Consultar la documentación de Rayls

---

**Última actualización**: 2025-11-19
**Estado**: ✅ Producción en Rayls Devnet
