import React, { FC } from 'react';

import { User } from '../../../types/User';
import { Image } from '../../Atoms/Image/Image';
import { RoundButton } from '../RoundButton/RoundButton';

/**
 * User Icon with image from loged in user
 */

export type BaseProps = {
	size: 'S' | 'M' | 'L' | 'XL';
	border?: boolean;
	user: User;
	href?: string;
};

const sizeMap: Record<BaseProps['size'], string> = {
	S: 'h-10 w-10',
	M: 'h-16 w-16',
	L: 'h-24 w-24',
	XL: 'h-40 w-40',
};
const imgMap: Record<BaseProps['size'], number> = {
	S: 40,
	M: 64,
	L: 96,
	XL: 160,
};
const noAvatar =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAMAAAAshD+zAAAAQlBMVEV8Ou3///+9nPb38/6MUu/v5/3OtfjFqfeERu7ezvu2kPWld/Oda/GthPSca/Hm2vyVX/DWwvm9nfa+nPa+nfatg/TA3Iq2AAAEXElEQVR42uzazbKbMAwFYB38HxcDafv+r9rp3LtJBkZwwcLO6NufhYIiKyaklFJKKaWUUkoppZRSSimllFJKKaWUUuqnbPk7+DQ5g/+Mm5IfHiVS72IOyWCdSSH3W2EJEzhTKNSfEgz2cb6v+uanwRHOW+pESTguZerAmPAzbqTGjQ4APrK8knCOa3a22AXnNTpaHgZXMA9qjk24Smrt4T0MrmOaGiwx4FqhnaXTOlzNtdKaxeB6bqYWjKijhak5oJYnHdRRbfdX91Lbh1X3VttHVTfgzQdV90B9I91jhoRftFPre8kaY0ledJAxRRIXICXQHj0sXS0sYpZZlrv+2iVISsTo7oTb35gdN6V0Y3pIW0hKwT5dLioO+/Q4U0ZsMSFbojl7rOODt2/QDhuWSN+sB+Nw0JGEcde8/g0WH5R/dA7r/rBH4blgovoy1nl6s4DBBuUHZsI6S2+iAYMJyj86i3We/VF0PjhTZR7rMtvA54NPqsxh3cw+5PNBQ3UVbKAVYDBB8ZHiby0uUFUOGyx/9Xc+aKimAkgNFPm+DNgSmBY+HJTvywlbTORn3vngRPVEbFuYz/+aYKRq8oFLnAG848FMVfAL1ZPd7c8HA1WT9v5vKy5gsEHx5dmA4fNMZHMwYHBB+ZMu4n6WXvR9pccc4/1eou+8Senl/T5voFcd36LzP9w7fW8lfBZMuN9Er7p+RyB28WxwP0OVoAX0RYu7qrjhSq0V96+9O9BxFATCAPyPMAhKq929vv+rXi6bS3q5FSF1ENz5HqDkL1gUy9BnQ5lt+t7DGdpmcRxL2wyEMG1bKz19MIQstO1WaalmgZBA2yYcZ6BtAUIcbXM4ziO7nUrfKFca/gOEPOvMBZ4SJgiJlDDXWfqNEGIpYazzwO8hxVSZXbmglVrrDLHGAmKAmLHGuHRljdS51I2Xv7BphhhPKR8VVn495CzyXceUsEDQKN51A6WMEBRJuOssU0qEJCP8xTpKYYgaKSnKviRzEBUpib3otrUIWYaSRslxwRA2UNok+HLTQdhKO1a5j7aQFijNWKk9sAHiIu1gK5ONZsgL++lEsjEquNEeXiVqqtxQA9Ouqfx3somOy9toPPrCEkaNdBwQaB9H5LozNdNxQKQczh5ZeSqilgfl4I+MaJmVMB2qsYay8GSPiFZ5G/xEuRI1Ve/OUKYJNQXKxm7235UJfk12/o3XG9vgl8cw3y0AeLs+J8f0pcFBeeh/Lxua4n5GPRT4hepgj0L9VJ9gizNEqmFFsW5K9Uw4yydJ+4Vs3aUrytZZusJsXaUrztZRuvOz/Xsj1vdN13dWpuOZiDbY49MtrdRxvnYFbgA3Q0dpsPD9laveX/u8gkRZqyKPBrvtS2R6T2hlAvhpp7u8FS80H+2POVxuQL6ypQuTn20cvZArZuczYzed9iLmnD/XZbKrnxz4l4/Tf2c+PmOzk7VSSimllFJKKaWUUkoppZRSSimllFJKqTP9BiSAPrpV6Kh2AAAAAElFTkSuQmCC';
export const UserProfile: FC<BaseProps> = ({ size = 'M', border, href, user }) => {
	const baseStyle = ['inline-flex', 'rounded-full', 'self-center', 'bg-purple-200', border && 'border-6'];

	if (href) {
		if (size !== 'XL') {
			return (
				<div className={[...baseStyle, 'overflow-hidden', sizeMap[size]].join(' ')}>
					<a href={href} className="transition duration-300 ease-in-out hover:scale-110">
						<Image src={user.avatar} alt={user.userName} width={imgMap[size]} height={imgMap[size]} />
					</a>
				</div>
			);
		} else {
			return (
				<div className={[...baseStyle, sizeMap[size], 'relative'].join(' ')}>
					<div className="rounded-full overflow-hidden">
						<Image
							src={user.avatar || noAvatar}
							alt={user.userName}
							width={imgMap[size]}
							height={imgMap[size]}
						/>
					</div>
					<div className="absolute bottom-0 right-0">
						<RoundButton as="a" icon="edit" color="slate">
							Edit User Image
						</RoundButton>
					</div>
				</div>
			);
		}
	}

	return (
		<div className={[...baseStyle, 'overflow-hidden', sizeMap[size]].join(' ')}>
			<Image src={user.avatar} alt={user.userName} width={imgMap[size]} height={imgMap[size]} />
		</div>
	);
};
