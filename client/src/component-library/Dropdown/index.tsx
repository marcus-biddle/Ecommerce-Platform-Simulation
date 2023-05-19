import { FILTER_OPTIONS } from '../../constants/content';

export const Dropdown = ({ handleFilterClick, open, activeFilter, trigger }: any) => {
    return (
    <div style={{ position: 'relative' }}>
        {/* Trigger button */} 
        {/* https://www.robinwieruch.de/react-dropdown/ */}
        {trigger}
        { open ? 
        <ul style={{ position: 'absolute', listStyleType: 'none', margin: '5px', padding: '0', border: '1px solid grey', width: '150px'}}>
            {FILTER_OPTIONS.map((filter) => {
                return (
                    <li style={{ margin: '0', backgroundColor: 'white'}} key={filter.type} onClick={() => handleFilterClick(filter.type)}>
                        <div style={{ width: '100%', height: '100%', textAlign: 'left', padding: '5px', margin: '0', cursor: 'pointer'}}>{filter.type}</div>
                    </li>
                )
            })}
        </ul>
        :
        null
        }
    </div>
  )};