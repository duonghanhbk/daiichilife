import dynamic from 'next/dynamic'

const All = dynamic(() => import('components/package/All'))

const AllPackage = () => <All />

export default AllPackage
