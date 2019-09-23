import React from 'react';
import First from './First';
import Second from './Second';
import withConditionalRender from './withConditionalRender';

const DynamicComponent = withConditionalRender(First)(Second);

class HOC3 extends React.Component {
    state = {
        isLoggedIn: false,
        showFirst: true,
    };

    toggle = e => {
      e.preventDefault();
      if (localStorage.getItem('showFirst')) {
        console.log(localStorage.getItem('showFirst'))
        localStorage.removeItem('showFirst');
        this.setState({ showFirst: false });
      } else {
        console.log('1')
        localStorage.setItem('showFirst', true);
        this.setState({ showFirst: true });
      }
    };

    render() {
        return (
          <div>
            <DynamicComponent />
            <button onClick={this.toggle}>Toggle</button>
          </div>
        );
    }
}

export default HOC3;