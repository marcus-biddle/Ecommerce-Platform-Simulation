import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {FaTheaterMasks, FaPlaneArrival, FaShippingFast} from 'react-icons/fa';
import { IconType } from 'react-icons';
import bulba from '../../assets/bulbasaur.webp';
import char from '../../assets/charmander.png';
import toto from '../../assets/totodile.webp';

export const desktopFooter = [
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

export const tabChoices: string[] = ['stats', 'pokedex', 'wilderness'];

export const tabOptions: string[] = ['Fire', 'Water', 'Grass'];

export const bannerHeader: string = 'Free Standard Shipping Over $1000';
export const bannerSubheader: string = 'Not a member? Join today for more rewards!';

interface x {
    icon: IconType;
    title: string;
    statement: string;
}

export const guarantees: x[] = [
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

export const featured = [
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