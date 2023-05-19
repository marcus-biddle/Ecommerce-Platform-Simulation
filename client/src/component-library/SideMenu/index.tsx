import { FilterButton, SideMenuWrapper, StyledMenuH4 } from './styled';
import { FILTER_OPTIONS } from '../../constants/content';

export const SideMenu = ({ handleFilterClick, activeFilter }: any) => {
  return (
    <SideMenuWrapper>
      <StyledMenuH4>Filter By Type</StyledMenuH4>
      <div style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', gap: '10px'}}>
        {FILTER_OPTIONS.map((filter) => {
          return (
            <div key={filter.type} onClick={() => handleFilterClick(filter.type)}>
              <FilterButton id={filter.type === activeFilter ? 'active' : 'passive'}>{filter.type}</FilterButton>
            </div>
          )
        })}
      </div>
    </SideMenuWrapper>
  )};