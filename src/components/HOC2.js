import React from 'react';

const Title = props => {
    return <h1>{props.text}</h1>;
};

const SubTitle = props => {
    return <h2>{props.text}</h2>;
};

// const Footer = () => <h3>I am the footer</h3>;

const withUpperCase = SomeComp => props => {
    const upperCaseText = props.text.toUpperCase();
    return (
        <SomeComp text={upperCaseText} />
    );
};

// const withStyle = ComponentToStyle => () => {
//     const style = {
//         color: "red",
//         border: "1px solid blue",
//         margin: "2px auto",
//     }

//     return (<ComponentToStyle style={style} />);
// };



const TitleWithUpperCase = withUpperCase(Title);
const SubTitleWithUpperCase = withUpperCase(SubTitle);
// const FooterWithStyle = withStyle(Footer);


function Example2() {
    return (
        <div>
            <TitleWithUpperCase text="Higher Order Component 2" />
            <SubTitleWithUpperCase text="React HOC taught by Dustin Myers" />
            {/* <FooterWithStyle /> */}
        </div>
    );
}

export default Example2;