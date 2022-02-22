(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        // Definiendo un metodo en una interfaz
        getFullAddress(id: number): string;
    }
    
    // Si nuestra interfaz tiene mas de un nivel, lo recomendablen es crear otra interfaz:
    
    interface Address {
        id: number;
        zip: number;
        city: string;
    }

    const client: Client = {
        name: 'Elkin',
        age: 25,
        address: {
            id: 12,
            zip: 764501,
            city: 'Buenaventura',
        },
        getFullAddress(id: number) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 17,
        address: {
            id: 12,
            city: 'Buenaventura',
            zip: 764502,
        },
        getFullAddress(id: number) {
            return this.address.city;
        }
    }
})()