import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { execSync } from "child_process";

const commitHash = execSync("git rev-parse --short HEAD").toString();

const config: UserConfig = {
	define: {
		__COMMIT_HASH__: JSON.stringify(commitHash),
	},
	plugins: [sveltekit()]
};

export default config;
