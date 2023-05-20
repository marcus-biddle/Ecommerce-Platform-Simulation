import { FILTER_OPTIONS } from '../../constants/content';
import { DropdownItem, DropdownList } from './styled';

export const Dropdown = ({ handleFilterClick, open, trigger }: any) => {
    return (
    <div style={{ position: 'relative', zIndex: '90', width: '100%'}}>
        {/* Trigger button */} 
        {/* https://www.robinwieruch.de/react-dropdown/ */}
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '50px', marginLeft: '1.2rem'}}>
            <div style={{ fontSize: '17px', margin: 'auto'}}>Filter By Type</div>
            <div style={{ margin: 'auto'}}>
            {trigger}
            </div>
        </div>
        
        { open ? 
        <DropdownList>
            {FILTER_OPTIONS.map((filter) => {
                return (
                    <DropdownItem key={filter.type} onClick={() => handleFilterClick(filter.type)}>
                        <div style={{ width: '94%', height: '100%', textAlign: 'left', padding: '5px', margin: '0', cursor: 'pointer'}}>{filter.type}</div>
                    </DropdownItem>
                )
            })}
        </DropdownList>
        :
        null
        }
    </div>
  )};