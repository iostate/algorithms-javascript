// twoSumgo
func TwoSums(nums []int, target int) []int {
	n := len(nums)
	for i := 0; i < n-1; i++ {
		for ii := i + 1; ii < n; ii++ {
			if nums[i] + nums[ii] == target) {
				return []int{i, ii}
			}
		}
	}
}