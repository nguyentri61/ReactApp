import "./style.css";

const MyContent = () => {
    return (
        <div>
            <h2 className="title">Minh Tri</h2>
            <p>Theheheheheheheheheh</p>
        </div>
    );
}

const SecondComponent = () => {
    return (
        <>
            <div>
                <h2>Minh Tri 333</h2>
                <p>Theheheheheheheheheh</p>
            </div>
            <div>
                <h2>Second Component</h2>
                <p>This is the second component.</p>
            </div>
        </>
    );
}


export { MyContent, SecondComponent };