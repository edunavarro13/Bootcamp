if [ $1 -ge 0 -a $1 -lt 12 ]; then
echo "Good morning!"
elif [ $1 -ge 12 -a $1 -lt 18 ]; then
echo "Good afternoon!"
elif [ $1 -lt 0 -o $1 -gt 24 ]; then
echo "Error!"
else
echo "Good evening"
fi