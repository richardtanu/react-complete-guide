import React from 'react';

const withClass = (WrappedComponent, className, props) => { 
    return props => (
        <div className={className}>
            {/* the spread operator ... will be add all props send to this functional component */}
            <WrappedComponent {...props}/>
        </div>
    );
}
export default withClass;