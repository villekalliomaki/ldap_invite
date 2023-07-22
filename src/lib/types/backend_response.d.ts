export type BackendResponse<T> = {
	errors: string[] | undefined;
	data?: T;
};
