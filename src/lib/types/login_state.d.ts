export type LoginState = {
	// Token could be invalid, so just it existing doesn't mean much
	logged_in: boolean;
	// Server signed JWt
	token: string | undefined;
};
