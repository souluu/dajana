import Header from './Header';

export default ({ children }) => {
    const layoutStyle = {
        margin: 20,
        padding: 20,
        border: '1px solid #DDD'
    }
    return (<div style={layoutStyle}>
        <Header />
        { children }
    </div>)
}
    