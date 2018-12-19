if [ !$1 ]; then
echo "First parameter is false."
fi
if [ $2 ]; then
echo "$PWD"
fi
if [ $3 ]; then
echo "$PATH"
else
echo "Third parameter is false"
fi