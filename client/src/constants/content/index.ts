import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {FaTheaterMasks, FaPlaneArrival, FaShippingFast} from 'react-icons/fa';
import { IconType } from 'react-icons';
import bulba from '../../assets/bulbasaur.webp';
import char from '../../assets/charmander.png';
import toto from '../../assets/totodile.webp';

export type FooterLink = {
    label: string;
}

export interface FooterProps {
    name: string;
    links: FooterLink[]
}

export const FOOTER_LINKS: FooterProps[] = [
    {
        name: 'Shop',
        links: [
            {
                label: 'All Pokemon'
            },
            {
                label: 'Fire Type'
            },
            {
                label: 'Water Type'
            },
            {
                label: 'Grass Type'
            },
            {
                label: 'Discount'
            },
        ]
    },
    {
        name: 'Company',
        links: [
            {
                label: 'About Us'
            },
            {
                label: 'Contact'
            },
            {
                label: 'Our Mission'
            },
            {
                label: 'Affiliates'
            },
            {
                label: 'Careers'
            },
        ]
    },
    {
        name: 'Support',
        links: [
            {
                label: 'FAQs'
            },
            {
                label: 'Cookie Policy'
            },
            {
                label: 'Terms of Use'
            }
        ]
    }
]

export interface GauranteeProps {
    icon: IconType;
    title: string;
    statement: string;
}

export const GAURANTEES: GauranteeProps[] = [
    {
        icon: RiMoneyDollarCircleLine,
        title: 'Happy Pokemon',
        statement: 'Every pokemon is raised on our farm through ethical practices.'
    },
    {
        icon: FaTheaterMasks,
        title: 'Satisfaction Guarantee',
        statement: 'Exchange the pokemon you\'ve purchased if it doesn\'t fit your preferences.'
    },
    {
        icon: FaPlaneArrival,
        title: 'New Arrival Everyday',
        statement: 'We update our collections almost everyday.'
    },
    {
        icon: FaShippingFast,
        title: 'Fast & Free Shipping',
        statement: 'We offer fast and free shipping for our loyal customers.'
    },
];

export interface FeatureProps {
    img: string;
    sale: boolean;
    name: string;
    price: number;
}

export const FEATURED_POKEMON: FeatureProps[] = [
    {
        img: toto,
        sale: true,
        name: 'Totodile',
        price: 63.60
    },
    {
        img: char,
        sale: false,
        name: 'Charmander',
        price: 83.25
    },
    {
        img: bulba,
        sale: true,
        name: 'Bulbasaur',
        price: 133.00
    },
]

interface FilterProps {
    id: number;
    type: string;
}

export const FILTER_OPTIONS: FilterProps[] = [
    {
      id: 1,
      type: 'grass_bug',
    },
    {
      id: 2,
      type: 'poison_psychic_ghost',
    },
    {
      id: 3,
      type: 'fire',
    },
    {
      id: 4,
      type: 'water',
    },
    {
      id: 5,
      type: 'flying_ground_fighting',
    },
    {
      id: 6,
      type: 'ice',
    },
    {
      id: 7,
      type: 'fairy',
    },
    {
      id: 8,
      type: 'electric',
    },
    {
      id: 9,
      type: 'dragon_dark',
    },
    {
      id: 10,
      type: 'none'
    }
  ]