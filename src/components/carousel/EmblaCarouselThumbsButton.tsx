import React from 'react'

type ThumbProps = {
    selected: boolean
    index: number
    item: string
    onClick: () => void
}

export const Thumb: React.FC<ThumbProps> = ({ selected, index, item, onClick }) => {
    return (
        <div className={`embla-carousel__thumb${selected ? ' embla-carousel__thumb--selected' : ''}`}>
            <button onClick={onClick} type="button" className="embla-carousel__thumb-button">
                <img src={item} alt={`slide-${index}`} />
            </button>
        </div>
    )
}

export default Thumb
