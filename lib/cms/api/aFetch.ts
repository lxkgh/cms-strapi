import { gql } from '@apollo/client';
import Client from './client';
import Query from './query';
async function aFetch(key: string) {
    try {
        if (!Object.hasOwn(Query, key)) throw new Error(JSON.stringify('不含此元素', null, 2));
        const query = gql((Query as any)[key]);
        console.log(query);
        const { data } = await Client.query({
            query,
        });
        return data;
    } catch (e) {
        throw new Error(JSON.stringify(e, null, 2));
    }
}

export default aFetch;
