import React from 'react';
import faker from 'faker';

import { 
    Badge,
    Avatar,
    CustomInput,
    UncontrolledTooltip,
    AvatarAddOn,
    Media
} from './../../../../components';

import { randomArray } from './../../../../utilities';

const status = [
    "secondary",
    "success",
    "warning",
    "danger"
];

const tag = [
    "secondary",
    "primary",
    "info"
];

const TrTableClients = () => (
    <React.Fragment>
        <tr>
            <td className="align-middle">
                <CustomInput type="checkbox" id="clientCheckbox" label="" inline />
            </td>
            <td className="align-middle">
                <a href="#" id="tooltipAddToFavorites">
                    <i className="fa fa-fw fa-star-o"></i>
                </a>
                <UncontrolledTooltip placement="top" target="tooltipAddToFavorites">
                    Add To Favorites
                </UncontrolledTooltip>
            </td>
            <td className="align-middle">
                <Media>
                    <Media left className="align-self-center mr-3">
                        <Avatar.Image
                            size="md"
                            src="http://bs4.webkom.co/img/avatars/2.jpg"
                            addOns={[
                                <AvatarAddOn.Icon 
                                    className="fa fa-circle"
                                    color="white"
                                    key="avatar-icon-bg"
                                />,
                                <AvatarAddOn.Icon 
                                    className="fa fa-circle"
                                    color={ randomArray(status) }
                                    key="avatar-icon-fg"
                                />
                            ]}
                        /> 
                    </Media>
                    <Media body>
                        <div className="mt-0 d-flex">
                            { faker.name.firstName() } { faker.name.lastName() }
                        </div>
                        <span>
                            { faker.name.jobTitle() }
                        </span>
                    </Media>
                </Media>
            </td>
            <td className="align-middle">
                { faker.internet.email() }
            </td>
            <td className="align-middle">
                { faker.phone.phoneNumberFormat() }
            </td>
            <td className="align-middle text-right">
                <Badge pill color={ randomArray(tag) }>
                    { faker.commerce.department() }
                </Badge>
            </td>
        </tr>
    </React.Fragment>
)

export { TrTableClients };