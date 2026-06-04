class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class linkedList {
    constructor(){
        this.head = null;
    }
    append(data){
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let curr = this.head;
        while(curr.next !== null){
            curr = curr.next;
        }
        curr.next = newNode
    };
}