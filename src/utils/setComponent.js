const setComponent = (state, Component) => {
    switch (state) {
        case 'waiting':
            return <div>loading</div>;
        case 'loading':
            return <div>loading</div>;
        case 'success':
            return <Component />;
        case 'error':
            return <div>error</div>;
        default:
            return <div>error</div>;
    }
};

export default setComponent;
