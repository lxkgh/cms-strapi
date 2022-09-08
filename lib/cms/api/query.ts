import product from './products';
import article from './articles';
import home from './home';
const Query = {
    ...product,
    ...article,
    ...home,
};

export default Query;
