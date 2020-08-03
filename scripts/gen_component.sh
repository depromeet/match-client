#!/usr/bin/env bash

if [ -z "$*" ]; then
 echo "put argument with s:screens/c:components ComponentName "
 exit 0

fi


if [ "$1" == "c" ]; then
	FOLDER="components"
elif [ "$1" == "s" ]; then
	FOLDER="pages"
else
	echo "put argument with s:screens/c:components ComponentName "
	exit1
fi

FILE_NAME=$2
FIRST_CAP="$(tr '[:lower:]' '[:upper:]' <<< ${FOLDER:0:1})${FOLDER:1}"
APPEND=`echo "${FIRST_CAP%?}"`

echo `mkdir src/${FOLDER}/${FILE_NAME}`

echo `echo "export { default as ${FILE_NAME} } from './${FILE_NAME}${APPEND}';" > src/${FOLDER}/${FILE_NAME}/index.js`

echo `echo "
import React from 'react';
import * as S from './styles';

const ${FILE_NAME}${APPEND} = () => {
	return <S.Container>${FILE_NAME}${APPEND}</S.Container>;
};

export default ${FILE_NAME}${APPEND};" > src/${FOLDER}/${FILE_NAME}/${FILE_NAME}${APPEND}.jsx`

echo `echo "import styled from 'styled-components';

export const Container = styled.div

" > src/${FOLDER}/${FILE_NAME}/styles.js`
