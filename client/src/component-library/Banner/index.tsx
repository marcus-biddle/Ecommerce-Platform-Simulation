import { BannerButton } from "./styled";

interface BannerProps {
    header: string;
    subheader?: string;
}

export const Banner = ({ header, subheader}: BannerProps) => {
    return (
        <BannerButton onClick={() => alert('You clicked this button! The developer has not made a login page yet. Whoops...')}>
            <h2>{header}</h2>
            <span>{subheader}</span>
        </BannerButton>
    )
};