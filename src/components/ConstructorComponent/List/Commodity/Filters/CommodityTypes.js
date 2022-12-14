import React from 'react';

const CommodityTypes = ({mas, setCommodityTypes, setCommodityCategory}) => {
    return (
        <div>
            <select name="commodityCategory" onChange={event => {
                setCommodityTypes(event.target.value);
                setCommodityCategory("");
            }}>
                <option value={""}>Nothing</option>
                {
                    mas.map(value =>
                        <option value={value.title} key={value.name}>
                            {value.name}
                        </option>)
                }
            </select>
        </div>
    );
};

export default CommodityTypes;