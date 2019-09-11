import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee);

const CoffeePurchased = ({ numberPurchased }) => {
    const required = [1, 2, 3, 4, 5];
    const numberFree = Math.floor(numberPurchased / 6);
    const numberOfCups = (numberPurchased - numberFree) % 5;
    const numberRemaining = required.length - numberOfCups;
    const isNextCupFree = numberPurchased % 6 === 5;

    return (
        <div>
            {
                required.map(num => {
                    const isPurchased = isNextCupFree || numberOfCups >= num;
                    return (
                        <span key={num} className="cup">
                            <FontAwesomeIcon icon="coffee" size="3x" color={isPurchased ? "green" : "grey"} />
                        </span>
                    )
                })
            }
            {
                !isNextCupFree &&
                <h3>{`${numberRemaining} coffee(s) remaining until free`}</h3>
            }
            {
                isNextCupFree &&
                <h1>Free coffee availiable!</h1>
            }
        </div>
    )

}

export default CoffeePurchased;