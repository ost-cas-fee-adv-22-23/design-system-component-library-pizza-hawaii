export type IconsLibType = { [index: string]: string };
let Icons: IconsLibType = {
	mumble: `
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path d="M9.79291 10H6.20709C5.76166 10 5.53857 10.5386 5.85357 10.8535L7.64642 12.6464C7.84173 12.8417 8.15826 12.8417 8.35357 12.6464L10.1464 10.8535C10.4614 10.5386 10.2383 10 9.79291 10Z" fill="white"/>
				<path d="M14.8074 5.37115C15.5281 4.82697 16 3.97394 16 3C16 1.34314 14.6569 4.79794e-06 13 4.79794e-06C12.2129 4.79794e-06 11.504 0.309085 10.9712 0.806405C9.10669 -0.270475 6.89553 -0.271705 5.02875 0.806465C4.49603 0.309145 3.78705 4.79794e-06 3 4.79794e-06C1.34314 4.79794e-06 0 1.34314 0 3C0 3.97394 0.47186 4.82697 1.19263 5.37115C0.0154001 7.86726 -0.6396 11.0175 0.93457 13.2979C2.17285 15.0908 4.5498 16 8 16C11.4502 16 13.8271 15.0908 15.0654 13.2979C16.6397 11.0174 15.9845 7.86707 14.8074 5.37115ZM13.4199 12.1611C12.5772 13.3809 10.7539 14 8 14C5.24609 14 3.42285 13.3809 2.58008 12.1611C1.5293 10.6387 2.16309 8.3252 2.63477 7.08203C3.08594 5.88965 4.80762 2 8 2C11.1924 2 12.9141 5.88965 13.3652 7.08203C13.8369 8.3252 14.4707 10.6387 13.4199 12.1611Z" fill="white"/>
				<path d="M6.66949 6.61743C6.55627 6.17469 6.28967 5.56726 5.5061 5.56726C4.42505 5.56726 3.51904 7.16309 3.50872 7.87347C3.49841 8.58392 3.98235 9.35607 4.57946 9.35607C5.17663 9.35607 5.70171 8.82067 6.23711 8.05884C6.77246 7.29695 6.78278 7.06012 6.66949 6.61743Z" fill="white"/>
				<path d="M10.4939 5.56726C9.71033 5.56726 9.44373 6.17469 9.33051 6.61743C9.21723 7.06012 9.22754 7.29693 9.76288 8.05884C10.2983 8.82068 10.8234 9.35608 11.4205 9.35608C12.0176 9.35608 12.5016 8.58392 12.4913 7.87348C12.481 7.16309 11.575 5.56726 10.4939 5.56726Z" fill="white"/>
			</g>
		</svg>
		`,
	edit: `
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path d="M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z" fill="white"/>
				<path d="M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z" fill="white"/>
			</g>
		</svg>
	`,
	settings: `
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path d="M15.135 6.784C13.832 6.458 13.214 4.966 13.905 3.815C14.227 3.279 14.13 2.817 13.811 2.499L13.501 2.189C13.183 1.871 12.721 1.774 12.185 2.095C11.033 2.786 9.541 2.168 9.216 0.865C9.065 0.258 8.669 0 8.219 0H7.781C7.331 0 6.936 0.258 6.784 0.865C6.458 2.168 4.966 2.786 3.815 2.095C3.279 1.773 2.816 1.87 2.498 2.188L2.188 2.498C1.87 2.816 1.773 3.279 2.095 3.815C2.786 4.967 2.168 6.459 0.865 6.784C0.26 6.935 0 7.33 0 7.781V8.219C0 8.669 0.258 9.064 0.865 9.216C2.168 9.542 2.786 11.034 2.095 12.185C1.773 12.721 1.87 13.183 2.189 13.501L2.499 13.811C2.818 14.13 3.281 14.226 3.815 13.905C4.967 13.214 6.459 13.832 6.784 15.135C6.935 15.742 7.331 16 7.781 16H8.219C8.669 16 9.064 15.742 9.216 15.135C9.542 13.832 11.034 13.214 12.185 13.905C12.72 14.226 13.182 14.13 13.501 13.811L13.811 13.501C14.129 13.183 14.226 12.721 13.905 12.185C13.214 11.033 13.832 9.541 15.135 9.216C15.742 9.065 16 8.669 16 8.219V7.781C16 7.33 15.74 6.935 15.135 6.784ZM8 11C6.343 11 5 9.657 5 8C5 6.343 6.343 5 8 5C9.657 5 11 6.343 11 8C11 9.657 9.657 11 8 11Z" fill="#475569"/>
			</g>
		</svg>
	`,
	logout: `
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path d="M6.293 11.955C6.35799 11.9846 6.42858 12 6.5 12C6.62106 11.9999 6.73796 11.9558 6.829 11.876L10.829 8.376C10.8825 8.32907 10.9254 8.27125 10.9548 8.20641C10.9842 8.14157 10.9994 8.07119 10.9994 8C10.9994 7.92881 10.9842 7.85844 10.9548 7.79359C10.9254 7.72875 10.8825 7.67093 10.829 7.624L6.829 4.124C6.75672 4.06084 6.66779 4.01982 6.57283 4.00584C6.47787 3.99186 6.38089 4.00551 6.29347 4.04516C6.20606 4.0848 6.1319 4.14878 6.07986 4.22943C6.02782 4.31008 6.0001 4.40401 6 4.5V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H6V11.5C6.00003 11.596 6.02767 11.6899 6.07962 11.7706C6.13158 11.8512 6.20565 11.9153 6.293 11.955Z" fill="#475569"/>
				<path d="M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V4C0 4.26522 0.105357 4.51957 0.292893 4.70711C0.48043 4.89464 0.734784 5 1 5C1.26522 5 1.51957 4.89464 1.70711 4.70711C1.89464 4.51957 2 4.26522 2 4V2H14V14H2V12C2 11.7348 1.89464 11.4804 1.70711 11.2929C1.51957 11.1054 1.26522 11 1 11C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0Z" fill="#475569"/>
			</g>
		</svg>
	`,
};

export default Icons;
export const IconNames = Object.keys(Icons);
