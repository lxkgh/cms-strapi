export function gradeTitle (grade: number) {
    switch (grade) {
        case -1: 
            return '默认'
        case 0:
            return '全新'
        default:
            return '非全新'
    }
}