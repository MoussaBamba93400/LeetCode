/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.*/

import java.util.ArrayList;

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ArrayList<Integer> resultL1 = TurnNodeIntoArray(l1);
        ArrayList<Integer> resultL2 = TurnNodeIntoArray(l2);

        int NumberL1 = concatenateArrayList(resultL1);
        int NumberL2 = concatenateArrayList(resultL2);

        int sum = NumberL1 + NumberL2;

        ArrayList<Integer> SumList = intToArrayListDigits(sum);

        System.out.println(SumList);

        ListNode result = turnArrayIntoNode(SumList);

        return result;
    }

    private ArrayList<Integer> TurnNodeIntoArray(ListNode node) {
        ArrayList<Integer> list = new ArrayList<>();
        ArrayList<Integer> result = new ArrayList<>();
        ListNode current = node;

        while (current != null) {
            list.add(current.val);
            current = current.next;
        }

        while (list.size() != 0) {
            int index = list.size() - 1;
            result.add(list.get(index));
            list.remove(index);
        }

        return result;
    }

    public int concatenateArrayList(ArrayList<Integer> list) {
        StringBuilder sb = new StringBuilder();
        for (int num : list) {
            sb.append(num); // Append each number to the StringBuilder
        }
        return Integer.parseInt(sb.toString()); // Convert the result to an integer
    }

    public ArrayList<Integer> intToArrayListDigits(int number) {
        ArrayList<Integer> list = new ArrayList<>();

        // Handle the case where the number is 0
        if (number == 0) {
            list.add(0);
            return list;
        }

        // Convert number to digits
        while (number > 0) {
            list.add(0, number % 10); // Extract the last digit and add to the list
            number /= 10; // Remove the last digit from the number
        }

        return list;
    }

    private ListNode turnArrayIntoNode(ArrayList<Integer> sumList) {

        ArrayList<ListNode> nodes = new ArrayList();

        ListNode PrecedentNode = new ListNode();
        boolean PrecedentNodeInit = false;

        while (sumList.size() != 0) {
            int index = sumList.size() - 1;
            System.out.println(sumList.get(index));
            ListNode node = new ListNode(sumList.get(index));

            if (PrecedentNodeInit) {
                PrecedentNode.next = node;
            }

            nodes.add(node);

            sumList.remove(index);
            PrecedentNodeInit = true;
            PrecedentNode = node;

        }

        return nodes.get(0);

    }
}

