import React, { FC, useState, FormEvent } from 'react';

import { Grid } from '../../../components/Atoms/Grid/Grid';
import { Label } from '../../../components/Atoms/Label';

import { UserProfile } from '../UserProfile/index';
import { Navi, NaviButton } from '../../../components/Molecules/Navi';
import { Form, FormPassword, FormInput, FormTextarea } from '../../../components/Molecules/Form';
import { Button } from '../../../components/Molecules/Button';

import { Modal } from '../../../components/Organisms/Modal/Modal';

import { User } from '../../../types/User';

type THeader = {
	user: User;
};

export const Header: FC<THeader> = ({ user }) => {
	const [state, setState] = useState({
		showSettingsModal: false,
		user: user,
	});

	const handleSettingsModalClick = (): void => {
		setState({ ...state, showSettingsModal: !state.showSettingsModal });
	};

	const onFieldChange = (e: FormEvent): void => {
		const { name, value } = e.target as HTMLInputElement;

		setState({
			...state,
			user: {
				...state.user,
				[name]: value,
			},
		});
	};

	return (
		<>
			<header className="Header mb-8 bg-violet-600 text-white">
				<div className="px-content py-3">
					<div className="flex items-center justify-between gap-8 w-full max-w-content mx-auto">
						<a href="/" className="flex w-[209px]">
							<svg className="w-full" viewBox="0 0 209 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g>
									<path
										d="M23.3332 24.9999H16.6666C15.7128 24.9999 14.8567 25.5305 14.4303 26.3833C14.0038 27.2346 14.095 28.2388 14.6663 28.9989L17.9996 33.4455C18.4765 34.0803 19.2056 34.4448 19.9999 34.4448C20.7942 34.4448 21.5233 34.0803 22.0002 33.4439L25.3336 29.0005C25.9048 28.2388 25.996 27.2346 25.5696 26.3833C25.1431 25.5305 24.287 24.9999 23.3332 24.9999Z"
										fill="white"
									/>
									<path
										d="M38.0597 16.0758C37.6171 14.9079 37.0676 13.7285 36.4303 12.5711C38.5671 11.4489 39.9998 9.20946 39.9998 6.66664C39.9998 2.9899 37.0099 0 33.3332 0C30.9324 0 28.7031 1.40166 27.494 3.47298C25.2843 2.34649 22.7873 1.66666 19.9999 1.66666C17.2126 1.66666 14.7156 2.34659 12.5058 3.47298C11.2967 1.40166 9.06744 0 6.66664 0C2.9899 0 0 2.9899 0 6.66664C0 9.20914 1.43229 11.4485 3.56872 12.5707C2.9311 13.7283 2.38137 14.9078 1.93847 16.0758C0.0683664 21.0155 -1.39159 28.0175 2.28027 33.3348C5.33364 37.757 11.2955 39.9998 19.9999 39.9998C28.7043 39.9998 34.6662 37.757 37.7196 33.3348C41.3914 28.0175 39.9298 21.0155 38.0597 16.0758ZM34.9771 31.4403C32.5829 34.9087 27.5438 36.6665 19.9999 36.6665C12.456 36.6665 7.41697 34.9087 5.02276 31.4403C2.17284 27.3143 3.4684 21.4501 5.05531 17.2574C5.83167 15.2099 10.2002 4.99998 19.9999 4.99998C29.7997 4.99998 34.1681 15.2099 34.9445 17.2574C36.5314 21.4501 37.827 27.3143 34.9771 31.4403Z"
										fill="white"
									/>
									<path
										d="M16.0644 20.633C17.5683 18.4944 17.6985 17.6431 17.3225 16.1718C16.6096 13.3805 14.8323 12.7945 13.4684 12.7945C10.0797 12.7945 7.43648 17.3681 7.40393 19.6548C7.3844 21.0285 7.93941 22.4592 8.85574 23.3885C9.49864 24.0396 10.2539 24.3846 11.0416 24.3846C13.1461 24.3847 14.7623 22.4885 16.0644 20.633Z"
										fill="white"
									/>
									<path
										d="M26.5315 12.7945C25.1675 12.7945 23.3902 13.3805 22.6773 16.1718C22.3013 17.6432 22.4316 18.4944 23.9354 20.6331C25.2375 22.4885 26.8537 24.3847 28.9582 24.3847C29.746 24.3847 30.5012 24.0396 31.1441 23.3886C32.0604 22.4592 32.6154 21.0286 32.5959 19.6565C32.5633 17.3681 29.9201 12.7945 26.5315 12.7945Z"
										fill="white"
									/>
								</g>
								<path
									d="M86.7999 6.55991V34.6398H79.9599V17.7999L73.6799 34.6398H68.1599L61.84 17.7599V34.6398H55V6.55991H63.08L70.9599 25.9998L78.7599 6.55991H86.7999Z"
									fill="white"
								/>
								<path
									d="M111.358 12.3199V34.6398H104.519V31.5998C103.825 32.5865 102.879 33.3865 101.679 33.9998C100.505 34.5865 99.1986 34.8798 97.7586 34.8798C96.0519 34.8798 94.5452 34.5065 93.2386 33.7598C91.9319 32.9865 90.9186 31.8798 90.1986 30.4398C89.4786 28.9998 89.1186 27.3065 89.1186 25.3598V12.3199H95.9186V24.4398C95.9186 25.9332 96.3052 27.0932 97.0786 27.9198C97.8519 28.7465 98.8919 29.1598 100.199 29.1598C101.532 29.1598 102.585 28.7465 103.359 27.9198C104.132 27.0932 104.519 25.9332 104.519 24.4398V12.3199H111.358Z"
									fill="white"
								/>
								<path
									d="M142.351 12.0799C145.125 12.0799 147.325 12.9199 148.951 14.5999C150.605 16.2799 151.431 18.6132 151.431 21.5998V34.6398H144.631V22.5198C144.631 21.0798 144.245 19.9732 143.471 19.1999C142.725 18.3999 141.685 17.9999 140.351 17.9999C139.018 17.9999 137.965 18.3999 137.192 19.1999C136.445 19.9732 136.072 21.0798 136.072 22.5198V34.6398H129.272V22.5198C129.272 21.0798 128.885 19.9732 128.112 19.1999C127.365 18.3999 126.325 17.9999 124.992 17.9999C123.658 17.9999 122.605 18.3999 121.832 19.1999C121.085 19.9732 120.712 21.0798 120.712 22.5198V34.6398H113.872V12.3199H120.712V15.1199C121.405 14.1865 122.312 13.4532 123.432 12.9199C124.552 12.3599 125.818 12.0799 127.232 12.0799C128.912 12.0799 130.405 12.4399 131.712 13.1599C133.045 13.8799 134.085 14.9065 134.832 16.2399C135.605 15.0132 136.658 14.0132 137.992 13.2399C139.325 12.4666 140.778 12.0799 142.351 12.0799Z"
									fill="white"
								/>
								<path
									d="M160.655 15.4799C161.295 14.4399 162.215 13.5999 163.415 12.9599C164.615 12.3199 165.988 11.9999 167.535 11.9999C169.375 11.9999 171.042 12.4665 172.535 13.3999C174.028 14.3332 175.202 15.6665 176.055 17.3999C176.935 19.1332 177.375 21.1465 177.375 23.4398C177.375 25.7332 176.935 27.7598 176.055 29.5198C175.202 31.2531 174.028 32.5998 172.535 33.5598C171.042 34.4931 169.375 34.9598 167.535 34.9598C165.962 34.9598 164.588 34.6531 163.415 34.0398C162.242 33.3998 161.322 32.5598 160.655 31.5198V34.6398H153.815V5.03992H160.655V15.4799ZM170.415 23.4398C170.415 21.7332 169.935 20.3998 168.975 19.4399C168.042 18.4532 166.882 17.9599 165.495 17.9599C164.135 17.9599 162.975 18.4532 162.015 19.4399C161.082 20.4265 160.615 21.7732 160.615 23.4798C160.615 25.1865 161.082 26.5332 162.015 27.5198C162.975 28.5065 164.135 28.9998 165.495 28.9998C166.855 28.9998 168.015 28.5065 168.975 27.5198C169.935 26.5065 170.415 25.1465 170.415 23.4398Z"
									fill="white"
								/>
								<path d="M185.403 5.03992V34.6398H178.564V5.03992H185.403Z" fill="white" />
								<path
									d="M209 23.1198C209 23.7598 208.96 24.4265 208.88 25.1198H193.4C193.507 26.5065 193.947 27.5732 194.72 28.3198C195.52 29.0398 196.494 29.3998 197.64 29.3998C199.347 29.3998 200.534 28.6798 201.2 27.2398H208.48C208.107 28.7065 207.427 30.0265 206.44 31.1998C205.48 32.3731 204.267 33.2931 202.8 33.9598C201.334 34.6265 199.694 34.9598 197.88 34.9598C195.694 34.9598 193.747 34.4931 192.04 33.5598C190.334 32.6265 189 31.2931 188.04 29.5598C187.08 27.8265 186.6 25.7998 186.6 23.4798C186.6 21.1598 187.067 19.1332 188 17.3999C188.96 15.6665 190.294 14.3332 192 13.3999C193.707 12.4665 195.667 11.9999 197.88 11.9999C200.04 11.9999 201.96 12.4532 203.64 13.3599C205.32 14.2665 206.627 15.5599 207.56 17.2399C208.52 18.9199 209 20.8798 209 23.1198ZM202 21.3198C202 20.1465 201.6 19.2132 200.8 18.5199C200 17.8265 199 17.4799 197.8 17.4799C196.654 17.4799 195.68 17.8132 194.88 18.4799C194.107 19.1465 193.627 20.0932 193.44 21.3198H202Z"
									fill="white"
								/>
							</svg>

							<h1 className="sr-only">Mumble</h1>
						</a>
						<nav className="">
							<Navi>
								<NaviButton
									icon=""
									onClick={(): void => {
										window.location.href = user.profileLink;
									}}
									title="My Mumble Profile"
								>
									<UserProfile
										userName={user.userName}
										avatar={user.avatar}
										size="S"
										buttonLabel="My Mumble Profile"
									/>
								</NaviButton>
								<NaviButton icon="settings" onClick={handleSettingsModalClick}>
									Settings
								</NaviButton>
								<NaviButton
									icon="logout"
									onClick={(): void => {
										window.location.href = '/logout';
									}}
								>
									Log out
								</NaviButton>
							</Navi>
						</nav>
					</div>
				</div>
			</header>

			{state.showSettingsModal && (
				<Modal title="Einstellungen" isVisible={state.showSettingsModal} onClose={handleSettingsModalClick}>
					<Form>
						<fieldset>
							<Label as="legend" size="XL">
								Persönliche Einstellungen
							</Label>
							<div className="mt-4">
								<Grid variant="col" gap="M" marginBelow="M">
									<FormInput
										type="text"
										label="UserName"
										name="userName"
										value={state.user.userName}
										disabled={true}
										icon="mumble"
										onChange={onFieldChange}
									/>
									<FormInput
										type="text"
										label="Vorname Name"
										name="fullName"
										value={state.user.fullName}
										onChange={onFieldChange}
									/>
									<FormInput
										type="email"
										label="E-Mail"
										name="email"
										value={state.user.email}
										onChange={onFieldChange}
									/>
									<FormTextarea label="Bio" name="bio" value={state.user.bio} onChange={onFieldChange} />
								</Grid>
							</div>
						</fieldset>
						<fieldset>
							<Label as="legend" size="XL">
								Passwort ändern
							</Label>
							<div className="mt-4">
								<Grid variant="col" gap="M" marginBelow="M">
									<FormPassword label="Altes Passwort" onChange={onFieldChange} />
									<FormPassword label="Neues Passwort" onChange={onFieldChange} />
								</Grid>
							</div>
						</fieldset>

						<Grid variant="row" gap="S" wrapBelowScreen="md">
							<Button colorScheme="slate" icon="cross">
								Abbrechen
							</Button>
							<Button colorScheme="violet" icon="check">
								Speichern
							</Button>
						</Grid>
					</Form>
				</Modal>
			)}
		</>
	);
};
