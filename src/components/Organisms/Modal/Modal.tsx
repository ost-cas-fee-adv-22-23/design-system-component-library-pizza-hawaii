import React, { FC, ReactNode } from 'react';
import { Headline } from '../../Atoms/Headline/Headline';
import { Icon } from '../../Atoms/Icon/Icon';

type BaseProps = {
	title: string;
	children: ReactNode;
	isVisible: boolean;
	onClose: () => void;
};

export const Modal: FC<BaseProps> = ({ title, children = 'Modal Content', isVisible = false, onClose }) => {
	//const [visible, setVisible] = useState(visibility);

	// const setVisibility = (visibility) => {
	// 	console.log(visibility);
	// 	isVisible = visibility;
	// };

	return (
		<>
			{isVisible ? (
				<>
					<dialog
						className="flex justify-center items-center fixed inset-0 p-0 z-50 bg-white rounded-2xl shadow-lg overflow-hidden"
						open={isVisible}
					>
						<div className="relative flex flex-col w-full overflow-x-hidden max-h-screen">
							{/*header*/}
							<div className="flex items-center justify-between gap-4 px-8 py-6 bg-violet-600 text-white">
								<Headline level={3} as="h1">
									{title}
								</Headline>
								<button className="inline-flex p-4 -m-4 transition hover:rotate-90" onClick={onClose}>
									<Icon name="cancel" />
									<span className="sr-only">Close</span>
								</button>
							</div>

							{/*body*/}
							<div className="relative p-8 flex-auto overflow-y-auto ">{children}</div>
						</div>
					</dialog>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};
