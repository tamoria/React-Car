const token = '1822b1ac031e9c22bfbd050e1468ec501c970350507c0954'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://car-inventory-izkp.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://car-inventory-izkp.onrender.com/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        console.log(response)
        
        if (!response.ok) {
            throw new Error('Failed to create new data on the server');
        }
    
        return await response.json();
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://car-inventory-izkp.onrender.com/api/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    
        if (!response.ok) {
            throw new Error('Failed to update data on the server');
        }
    
        return await response.json();
    },

    delete: async (id: string) => {
        const response = await fetch(`https://car-inventory-izkp.onrender.com/api/cars/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}

