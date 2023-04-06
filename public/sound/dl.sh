#!/bin/bash

# list of thai letter
# create array of letters
#letter = "กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ"
# create string of letters
letter="ก ข ฃ ค ฅ ฆ ง จ ฉ ช ซ ฌ ญ ฎ ฏ ฐ ฑ ฒ ณ ด ต ถ ท ธ น บ a ป ผ ฝ b c พ ฟ ภ ม ย ร ล ว ศ ษ ส ห ฬ อ d ฮ"

echo $letter
#loop for download
cpt=212981
for i in $letter
do
curl http://www.thai-language.com/mp3/P${cpt}.mp3 -o $i.mp3
cpt=$((cpt + 1))
done

