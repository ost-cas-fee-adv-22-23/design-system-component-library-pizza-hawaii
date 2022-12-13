import React from 'react';
import PropTypes from 'prop-types';
import "/src/components/Components-base.css";
import "./ContentCard.css"
import { UserName } from "../../Molecules/UserName/UserName";
import TimeStamp from "../../Molecules/TimeStamp/TimeStamp";
import { UserProfile } from '../../Molecules/UserProfile/UserProfile'
import { IconLink } from "../../Molecules/IconLink/IconLink";
import { Image } from "../../Atoms/Image/Image"
import { Richtext } from "../../Atoms/Richtext/Richtext";
import { Label } from '../../Atoms/Label/Label';




export const ContentCard = (props) => {
	const cardStyle = "flex flex-start justify-center items-start bg-white py-xl px-xxl"
	const { variant } = props
	const socialInteraction = ["pt-s flex flex-row items-center"];


	const preset = {
		detailpage: {
			userprofile: "m",
			headlineSize: "l",
			textSize: "l",
			sizeStyle: "-variantDetail",
			cardStyle: "border-2 border-solid border-white hover:border-gray-300",
		},
		timeline: {
			userprofile: "m",
			headlineSize: "m",
			textSize: "m",
			cardStyle: "rounded-3xl",
			sizeStyle: "-variantTimeline",
		},
		responsive: {
			userprofile: "s",
			headlineSize: "m",
			textSize: "m",
			cardStyle: "border-2 border-solid border-white hover:border-gray-200",
			sizeStyle: "-variantResponsive",
			headerStyle: "flex-col"
		}
	};

	const setting = preset[variant] || preset.detailpage;

	return (
		<article
			className={["contentCard", cardStyle, setting.cardStyle].join(" ")}
		>
			<div>
				<div className={setting.sizeStyle}>
					<UserProfile size={setting.userprofile} />
					<div className={setting.headerStyle}>
						<Label className={[]} size={setting.headlineSize}>{props.text}</Label>
						<span className={["flex flex-row align-baseline"]}>
							<UserName username={"Pineapple Peter"} />
							<TimeStamp time={"13:32"} />
						</span>
					</div>
				</div>
				<Richtext size={setting.textSize}>
					<p>
						Paragraph: Sed ut perspiciatis unde omnis iste natus
						error sit voluptatem accusantium doloremque laudantium,
						totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt
						explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur
						magni dolores eos qui ratione voluptatem sequi nesciunt.
					</p>
				</Richtext>
				<Image preset="post" />
				<div className={socialInteraction}>
					<IconLink
						oneline={true}
						icon="comment"
						label="Comment"
						link="#"
					/>
					<IconLink
						oneline={true}
						icon="heart"
						label="Like"
						link="#"
					/>
					<IconLink
						oneline={true}
						icon="share"
						label="Share Link"
						link="#"
					/>
				</div>
			</div>
		</article>
	);
}

ContentCard.PropTypes = {
	variant: PropTypes.oneOf(['detailpage', 'timeline']),
	text: PropTypes.string,
	size: PropTypes.oneOf(['s', 'm', 'l']),
	//corners: PropTypes.string
}


export default ContentCard
