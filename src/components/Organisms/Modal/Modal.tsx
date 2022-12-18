import React, { FC, ReactNode, useState } from 'react';
import { Headline } from '../../Atoms/Headline/Headline';
import { Icon } from '../../Atoms/Icon/Icon';

type BaseProps = {
	title: string;
	children: ReactNode;
};

export const Modal: FC<BaseProps> = ({ title, children = 'Modal Content' }) => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<button onClick={() => setVisible(true)}>Open regular modal</button>

			{visible ? (
				<>
					<dialog
						className="flex justify-center items-center fixed inset-0 p-0 z-50 overflow-x-hidden overflow-y-auto bg-white rounded-2xl shadow-lg overflow-hidden"
						open={visible}
					>
						<div className="relative flex flex-col w-full ">
							{/*header*/}
							<div className="flex items-center justify-between gap-4 px-6 py-8 bg-violet-600 text-white">
								<Headline level="3" as="h1">
									{title}
								</Headline>
								<button className="inline-flex p-4 -m-4" onClick={() => setVisible(false)}>
									<Icon name="cancel" />
									<span className="sr-only">Close</span>
								</button>
							</div>

							{/*body*/}
							<div className="relative p-6 flex-auto">{children}</div>
						</div>
					</dialog>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};
