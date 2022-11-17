import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { execSync } from "child_process";

const commitHash = execSync("git rev-parse --short HEAD").toString();
const commitDate = execSync("git log -1 --date=short --format=\"%cd\"").toString();

const config: UserConfig = {
	define: {
		__COMMIT_HASH__: JSON.stringify(commitHash),
		__COMMIT_DATE__: JSON.stringify(commitDate),
	},
	plugins: [sveltekit()]
};

export default config;
