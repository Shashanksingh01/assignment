function rightrotate(arr , n , oop , cur) {
		var tmp = arr[cur];
		for (i = cur; i > oop; i--)
			arr[i] = arr[i - 1];
		arr[oop] = tmp;
	}

	function arrangeArray(arr , n) {
		var oop = -1;

		for (var index = 0; index < n; index++)
		{
			if (oop >= 0)
			{if (((arr[index] >= 0) && (arr[oop] < 0)) || ((arr[index] < 0) && (arr[oop] >= 0))) {
					rightrotate(arr, n, oop, index);

					
					if (index - oop >= 2)
						oop = oop + 2;
					else
						oop = -1;
				}
			}

			if (oop == -1) {
				if (((arr[index] >= 0) && ((index & 0x01) == 0)) || ((arr[index] < 0) && (index & 0x01) == 1))
					oop = index;
			}
		}
	}
	function display(arr , n) {
		for (i = 0; i < n; i++)
			document.write(arr[i] + " ");
		document.write("");
	}

		var arr = [ -3,1,2,4,-6,8,-8,-1];
		var n = arr.length;

		document.write("Given array is ");
		display(arr, n);

		arrangeArray(arr, n);

		document.write("<br/>arrangeArrayD array is ");
		display(arr, n);
