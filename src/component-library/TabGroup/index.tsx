import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { ActiveTab, ButtonGroup, Column, StyledLi, Tab } from './styled';
const tabs: string[] = ['stats', 'pokedex', 'wilderness'];

export const PokeInfo = ({ id, pokemonPDP }: any) => {
    const [active, setActive] = useState(tabs[0]);
    const [info, setInfo] = useState<any>({});
    const [isLoadingInfo, setLoadingInfo] = useState(true);

    const pokemonClient = axios.create({
        baseURL: `https://pokeapi.co/api/v2/pokemon-species/${parseInt(id || '') + 1}`
    })

    const fetchInfo = async() => {
        pokemonClient.get('') 
        .then((response) => {
            return Promise.resolve(response.data);
        })
        .then((response) => {
            setInfo(response);
            setLoadingInfo(false);
        })
    }
        useEffect(() => {
            fetchInfo();
        }, [])

    const Tabs = () => {
        return (
            <ButtonGroup>
                {tabs.map((tab) => {
                    const tabProps = {
                        key: `tab-${tab}`,
                        activeTab: active === tab,
                        onClick: () => setActive(tab)
                    };
                    if (active === tab) {
                        return <ActiveTab {...tabProps}>{tab}</ActiveTab>
                    }
                    return <Tab {...tabProps}>{tab}</Tab>
                    
                }) }
            </ButtonGroup>
        )
    }

    const Pokedex = () => {
        return (
            <ul>
                {info.flavor_text_entries.slice(2,5).map((item: any, index: number) => {
                    if (info.flavor_text_entries[index + 1].flavor_text !== item.flavor_text) {
                        return (
                            <li key={`item-text-${index}`} style={{ fontSize: '18px', fontWeight: '300'}}>
                            {item.flavor_text}
                            </li>
                        );
                    };
                })}
            </ul>
        )
    }

    const Wilderness = () => {
        return (
            <>
                <StyledLi>
                    <Column>
                        <div>Habitat:</div>
                        <div>{info.habitat? `${info.habitat.name}s` : 'unknown'}</div>
                    </Column>
                </StyledLi>
                <StyledLi>
                    <Column>
                        <div>Chances of capture:</div>
                        <div>{info.capture_rate}%</div>
                    </Column>
                </StyledLi>
                <StyledLi>
                    <Column>
                        <div>Friendly:</div>
                        <div>{info.base_happiness}%</div>
                    </Column>
                </StyledLi>
                <StyledLi>
                    <Column>
                        <div>Main color:</div>
                        <div>{info.color.name}</div>
                    </Column>
                </StyledLi>
                <StyledLi>
                    <Column>
                        <div>Stance:</div>
                        <div>{info.shape.name}</div>
                    </Column>
                </StyledLi>
            </>
        )
    }

    const Stats = () => {
        return (
            <>
                <StyledLi>
                    <Column>
                        <div>Base Experience:</div>
                        <div>{pokemonPDP.base_experience}pts</div>
                    </Column>
                </StyledLi>
                <StyledLi>
                    <Column>
                        <div>Height:</div>
                        <div>{pokemonPDP.height}ft</div>
                    </Column> 
                </StyledLi>
                <StyledLi>
                    <Column>
                        <div>Weight:</div>
                        <div>{pokemonPDP.weight}lbs</div>
                    </Column> 
                </StyledLi>
                {pokemonPDP.stats.slice(0,3).map((item: any) => {
                    return (
                        <StyledLi key={item.stat.name}>
                            <Column>
                                <div>{item.stat.name}:</div>
                                <div>{item.base_stat}pts</div>
                            </Column>
                        </StyledLi>
                    )
                })}
            </>
        )
    }
    
    if (isLoadingInfo === true) {
        return (
            <>Loading...</>
        )
    }

    return (
        <>
            <Tabs />
            {active === tabs[1] 
            ?
            <Pokedex />
            : active === tabs[2]
            ?
            <Wilderness />
            :
            <Stats /> }
        </>
    )
}