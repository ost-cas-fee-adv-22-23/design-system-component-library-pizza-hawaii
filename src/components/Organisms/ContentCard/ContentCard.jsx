import React from 'react';
import PropTypes from 'prop-types';
import '/src/components/Components-base.css';
import './ContentCard.css';
import { UserName } from '../../Molecules/UserName/UserName';
import TimeStamp from '../../Molecules/TimeStamp/TimeStamp';
import { UserProfile } from '../../Molecules/UserProfile/UserProfile';
import { IconLink } from '../../Molecules/IconLink/IconLink';
import { Image } from '../../Atoms/Image/Image';
import { Richtext } from '../../Atoms/Richtext/Richtext';
import { Label } from '../../Atoms/Label/Label';

export const ContentCard = (props) => {
	const cardStyle = 'flex flex-start justify-center items-start bg-white py-l px-xl';
	const { variant } = props;

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
		<article className={['contentCard', cardStyle, setting.cardStyle].join(' ')}>
			<div>
				<div className={setting.sizeStyle}>
					<UserProfile size={setting.userprofile} />
					<div className={setting.headerStyle}>
						<Label className={[]} size={setting.headlineSize}>
							{props.text}
						</Label>
						<span className={['flex flex-row align-baseline']}>
							<UserName username={'Pineapple Peter'} />
							<TimeStamp time={'13:32'} />
						</span>
					</div>
				</div>
				<div className="mb-6">
					<Richtext size={setting.textSize}>
						<p>
							Paragraph: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
							beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
							odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
						</p>
					</Richtext>
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

export default ContentCard;
