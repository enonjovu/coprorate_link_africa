const rootLink = process.env.ROOT_LINK ?? 'http://localhost:3000';
const DEFAULT_PAGINATION_ITEM_COUNT = parseInt(process.env.DEFAULT_PAGINATION_ITEM_COUNT ?? '12');

const config = {
    DEFAULT_PAGINATION_COUNT: 12,
    BASE_URL: rootLink,
    DEFAULT_PAGINATION_ITEM_COUNT: DEFAULT_PAGINATION_ITEM_COUNT ?? 12,
};

export default config;
