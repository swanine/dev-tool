import _Button from './src/button'
import { withInstall, WithInstallType } from '../../utils/withInstall'

export * from './src/type'

export const RButton: WithInstallType<typeof _Button> = withInstall(_Button)
export default RButton
