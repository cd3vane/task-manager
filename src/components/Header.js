import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Manager',
}

Header.propTypes = {
    title: PropTypes.string,
}



//You can do CSS in JS and set style w/ single curly braces
// const headingStyle = {
//     color: 'red',
// }

export default Header
