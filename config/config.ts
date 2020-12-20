interface IConfig {
    adminUser: {
        SEED_USERNAME: string,
        SEED_PASSWORD: string
    },
}

const config: IConfig = {
    adminUser: {
        SEED_USERNAME: 'admin',
        SEED_PASSWORD: 'password',
    },
};

export default config;
