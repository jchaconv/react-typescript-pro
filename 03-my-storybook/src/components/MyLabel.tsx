import './MyLabel.css';

interface MyLabelProps {

    /**
     * Text to display
     */
    label: string;

    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Capitalize all letters
     */
    allCaps?: boolean;
    
    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    
    /**
     * Font color
     */
    fontColor?: string;

    /**
     * Background Color
     */
    backgroundColor?: string;
}


export const MyLabel = ({
    label,
    size = 'normal',
    allCaps,
    color = 'text-primary',
    fontColor,
    backgroundColor
}: MyLabelProps) => {
    return (
        <span 
            className={`${ size } ${ color } label`}
            style={{ color: fontColor, backgroundColor }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
