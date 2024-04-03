import geolib from 'geolib'

class GeoLib {
    public getAddressFromCoordinates(
        coordinates: [number, number] | { lat: number; lng: number }
    ): Promise<string> {
        const bounds = geolib.getBoundsOfDistance(
            { latitude: coordinates[0], longitude: coordinates[1] },
            1000
        )

        // Transforma o array de objetos em uma string
        const boundsString = JSON.stringify(bounds)
        return Promise.resolve(boundsString)
    }

    public getCoordinatesFromAddress(
        address: string
    ): Promise<{ lat: number; lng: number }> {
        return Promise.resolve({ lat: 0, lng: 0 })
    }
}

export default new GeoLib()
