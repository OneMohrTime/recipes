##############################################################################
THIS_APP_DIR=$1
THIS_BUDDY_CACHE=$2
THIS_ENV_EXTENTION=$3
THIS_BUDDY_EXECUTION_REVISION=$4
THIS_BUDDY_EXECUTION_REFRESH=$5
# echo ${THIS_APP_DIR}
# echo ${THIS_BUDDY_CACHE}
# echo ${THIS_ENV_EXTENTION}
# echo ${THIS_BUDDY_EXECUTION_REVISION}
# echo ${THIS_BUDDY_EXECUTION_REFRESH}
##############################################################################
THIS_RELEASE_DIR="releases/${THIS_BUDDY_EXECUTION_REVISION}"
# echo ${THIS_RELEASE_DIR}
##############################################################################
THIS_APP_DIR_FULLPATH="/srv/users/onemohrtime/apps/${THIS_APP_DIR}"
# echo ${THIS_APP_DIR_FULLPATH}
##############################################################################
cd ${THIS_APP_DIR_FULLPATH}
##############################################################################
echo "======================================================================="
##############################################################################
if [ ! -d "releases" ]
then
    mkdir -p releases
fi
##############################################################################
if [ -d "${THIS_RELEASE_DIR}" ] && [ "${THIS_BUDDY_EXECUTION_REFRESH}" = "true" ];
then
    echo "Removing: ${THIS_RELEASE_DIR}"
    rm -rf ${THIS_RELEASE_DIR};
fi
##############################################################################
if [ ! -d "${THIS_RELEASE_DIR}" ];
then
    echo "Creating: ${THIS_RELEASE_DIR}"
    cp -dR --preserve=links ~/buddy/${THIS_BUDDY_CACHE}/ ${THIS_RELEASE_DIR};
fi
##############################################################################
echo "Initializing shared directories"
mkdir -p ${THIS_APP_DIR_FULLPATH}/shared/storage
mkdir -p ${THIS_APP_DIR_FULLPATH}/shared/uploads
mkdir -p ${THIS_APP_DIR_FULLPATH}/shared/imager
##############################################################################
echo "Make sure the release doesn't contain shared directories"
rm -rf ${THIS_RELEASE_DIR}/storage
rm -rf ${THIS_RELEASE_DIR}/public/uploads
rm -rf ${THIS_RELEASE_DIR}/public/imager
##############################################################################
echo "Symlinking shared directories"
ln -fs ${THIS_APP_DIR_FULLPATH}/shared/storage ${THIS_RELEASE_DIR}/storage
ln -fs ${THIS_APP_DIR_FULLPATH}/shared/uploads ${THIS_RELEASE_DIR}/public/uploads
ln -fs ${THIS_APP_DIR_FULLPATH}/shared/imager  ${THIS_RELEASE_DIR}/public/imager
##############################################################################
echo "Linking current to revision: ${THIS_BUDDY_EXECUTION_REVISION}"
rm -f current
ln -s ${THIS_RELEASE_DIR} current
##############################################################################
if [ ! -L "current/.env" ]
then
    echo "Connecting: .env"
    ln -fs ./operations/env/env.${THIS_ENV_EXTENTION} current/.env
fi
##############################################################################
if [ ! -L "public" ]
then
    echo "Linking public to current/public"
    ln -fs current/public public
fi
##############################################################################
echo "Removing old releases"
cd releases && ls -t | tail -n +6 | xargs rm -rf
##############################################################################
echo "======================================================================="
##############################################################################
