import swaggerJsdoc from 'swagger-jsdoc'

const options = {
    failOnErrors: true,
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Geolocalização do Futuro',
            version: '1.0.0',
            description: 'API para geolocalização',
        },
    },
    apis: ['./src/routes/**/*.ts'],
}

const swaggerConfig = swaggerJsdoc(options)

export default swaggerConfig
