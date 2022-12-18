/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import '/src/components/Components-base.css';
import { UserName } from '../../Molecules/UserName/UserName';
import { TimeStamp } from '../../Molecules/TimeStamp/TimeStamp';
import { UserProfile } from '../../Molecules/UserProfile/UserProfile';
import { IconLink } from '../../Molecules/IconLink/IconLink';
import { Image } from '../../Atoms/Image/Image';
import { Richtext } from '../../Atoms/Richtext/Richtext';
import { Label } from '../../Atoms/Label/Label';

export const ContentCard = ({ variant, ...props }) => {
	const cardStyle = 'flex flex-start justify-center items-start bg-white py-l px-xl border border-gray-400 relative';

	const preset = {
		detailpage: {
			userprofile: 'M',
			headlineSize: 'L',
			textSize: 'L',
			sizeStyle: '-variantDetail',
			cardStyle: 'border-2 border-solid border-white hover:border-gray-300',
		},
		timeline: {
			userprofile: 'M',
			headlineSize: 'M',
			textSize: 'M',
			cardStyle: 'rounded-3xl',
			sizeStyle: '-variantTimeline',
		},
		responsive: {
			userprofile: 'S',
			headlineSize: 'M',
			textSize: 'M',
			cardStyle: 'border-2 border-solid border-white hover:border-gray-200',
			sizeStyle: '-variantResponsive',
			headerStyle: 'flex-col',
		},
	};

	const setting = preset[variant] || preset.detailpage;

	return (
		<article className={[cardStyle, setting.cardStyle].join(' ')}>
			<div>
				<div className={setting.sizeStyle}>
					<UserProfile size={setting.userprofile} />
					<div className={setting.headerStyle}>
						<Label className="mx-2" size={setting.headlineSize}>
							{props.author.fullName}
						</Label>
						<span className={['flex flex-row align-baseline']}>
							<UserName username={props.author.userName} />
							<TimeStamp time={'13:32'} />
						</span>
					</div>
				</div>
				<div className="mb-6">
					<Richtext size={setting.textSize}>{props.text}</Richtext>
				</div>
				<div className="mb-6">
					<Image preset="post" />
				</div>
				<div className="flex flex-row items-center gap-12">
					<IconLink oneline={true} icon="comment" label="Comment" link="#" />
					<IconLink oneline={true} icon="heart" label="Like" link="#" />
					<IconLink oneline={true} icon="share" label="Share Link" link="#" />
				</div>
			</div>
		</article>
	);
};

ContentCard.propTypes = {
	variant: PropTypes.oneOf(['detailpage', 'timeline', 'responsive']),
	text: PropTypes.string,
	size: PropTypes.oneOf(['S', 'M', 'L']),
	//corners: PropTypes.string
};
