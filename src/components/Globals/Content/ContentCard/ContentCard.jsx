import React from 'react';
import PropTypes from 'prop-types';
import Icon from "/src/components/Atoms/Icon/Icon";
import "/src/components/Components-base.css";
import "./ContentCard.css"
import {UserName} from '../../../Atoms/UserName/UserName';
import TimeStamp  from '../../../Atoms/TimeStamp/TimeStamp'
import { UserProfile } from '../../../Atoms/UserProfile/UserProfile'
import { IconLink } from '../../../Atoms/IconLink/IconLink';

// TODO: apply  font size of h1 to our new font-size mechanism
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
			cardStyle:"border-2 border-solid border-white hover:border-gray-300",
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
						<div>
							<h1
								className={[
									"title",
									`M-text-size-${setting.headlineSize}`,
								].join(" ")}
								>
								{props.text}
							</h1>
							<span className={["flex flex-row align-baseline"]}>
								<UserName username={"Pineapple Peter"} />
								<TimeStamp time={"13:32"} />
							</span>
						</div>
					</div>
				<div>
					<p
						className={[
							"py-6",
							"font-sans",
							`M-text-size-${setting.textSize}`,
						].join(" ")}
					>
						Paragraph: Sed ut perspiciatis unde omnis iste natus
						error sit voluptatem accusantium doloremque laudantium,
						totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt
						explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur
						magni dolores eos qui ratione voluptatem sequi nesciunt.
					</p>
				</div>
				<figure className="image">
					<span>here is the image component</span>
				</figure>
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
	//size: PropTypes.oneOf(['s', 'm', 'l']),
	//corners: PropTypes.string
}


export default ContentCard
